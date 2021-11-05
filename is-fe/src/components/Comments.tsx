import React from 'react';
import { Container } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import Comment from './Comment';
import Loader from './Loader';
import useComments from '../hooks/useComments';

const Comments = () => {
  // całą logikę z API zawrzemy w osobnym hooku useComments
  const { count, fetchComments, comments } = useComments();

  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: '150px', marginBottom: '150px' }}
    >
      <h1>Total comments: {count}</h1>{' '}
      {/* Wyświetlimy całkowitą ilość komantarzy z backendu */}
      <InfiniteScroll
        // Przekażemy aktualną liczbe zaciągniętych komentarzy
        dataLength={comments.length}
        // Wyślemy funkcję do refetcha - za każdym razem, kiedy zescrollujemy do dołu
        next={fetchComments}
        loader={<Loader />}
        // Sprawdzimy, czy zaciągnięte komentarze przekraczają całkowitą ich liczbę
        hasMore={comments.length < count}
        endMessage={<h3>That&apos;s all :)</h3>}
        style={{ overflow: 'visible' }}
      >
        {/* Wyświetlimy lokalnie zaciągnięte komentarze */}
        {comments.map(({ id, ...comment }) => (
          <Comment key={id} {...comment} />
        ))}
      </InfiniteScroll>
    </Container>
  );
};

export default Comments;
