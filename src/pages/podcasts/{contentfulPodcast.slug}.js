import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout'

export default function PodcastPost({ data }) {
    return (
        <Layout>
            <p>test</p>
        </Layout>
    )
};

export const PodcastQuery = graphql`
    query {
      allContentfulPodcast {
        nodes {
          podcast {
            title
          }
        }
      }
    }
`