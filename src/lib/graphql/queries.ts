import { gql } from 'graphql-request';

const GET_PROJECTS = gql`
  {
    projects {
    id
    title
    slug
    category
    description
    technologies
    githubUrl
    sourceUrl
    image {
      url
    }
  }
  }
`


export { GET_PROJECTS };