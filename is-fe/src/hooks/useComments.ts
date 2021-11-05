import { useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { COUNT_COMMENTS, FETCH_COMMENTS_WITH_PAGINATION } from '../api/queries';
import { CommentType } from '../types';

const COMMENTS_FETCH_LIMIT = 15;

interface CommentsData {
  comments: CommentType[];
}

interface CountCommentsData {
  commentsConnection: {
    aggregate: {
      count: number;
    };
  };
}

const useComments = () => {
  const [comments, setComments] = useState<CommentType[]>([]);

  const { data } = useQuery<CountCommentsData>(COUNT_COMMENTS);

  const [getComments] = useLazyQuery<CommentsData>(
    FETCH_COMMENTS_WITH_PAGINATION,
    {
      onCompleted: (data) => {
        if (data) {
          setComments((comments) => [...comments, ...data.comments]);
        }
      },
    },
  );

  const fetchData = () => {
    getComments({
      variables: {
        limit: COMMENTS_FETCH_LIMIT,
        offset: comments.length,
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    count: data?.commentsConnection.aggregate.count || 0,
    fetchComments: fetchData,
    comments,
  };
};

export default useComments;
