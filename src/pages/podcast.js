import { useEffect } from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';

export default function RandomArticle({ location }) {
    // React hydration allows this to happen:
    // The slugs are returned by GraphQL, React hydration creates the component on the client side, and the useEffect() can be leveraged.

    const data = useStaticQuery(graphql`
        query {
          allContentfulPodcast {
            nodes {
              podcast {
                title
              }
            }
          }
        }

    `).allContentfulPodcast.nodes.map((node) => (node.slug));


    useEffect(() => {
        navigate(`/podcast/${ data }`);
    }, [data])

    return null;
}