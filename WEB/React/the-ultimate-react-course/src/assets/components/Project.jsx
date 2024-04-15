

import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'

const Project = () => {
    const fetchProjects = async ({ pageParam = 1 }) => {
        
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + pageParam)
       const data= await res.json()
      
       return data
      }
    
      const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
      } = useInfiniteQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
        getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
      })
     console.log(data?.pages);
      return status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
      {data &&data?.pages.map(post=><p key={post.id}>{post.title}</p>)}
          <div>
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load More'
                : 'Nothing more to load'}
            </button>
          </div>
          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
      )
}

export default Project