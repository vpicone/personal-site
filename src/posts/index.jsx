import styled from "styled-components";
import Link from "next/link";

const BlogContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing[6]};
  padding-left: 0;
  padding-right: 0;
  background: white;
  align-items: center;
  ul {
    list-style: none;
    width: 100%;
    max-width: 550px;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 600px) {
    padding: 0 ${props => props.theme.spacing[6]};
    padding-bottom: 160px;
  }
`;

const Post = styled.article`
  color: #2d2d2d;
  margin-bottom: ${props => props.theme.spacing[8]};
  a {
    color: inherit;
  }
  h2 {
    margin-bottom: ${props => props.theme.spacing[2]};
  }
  time {
  }
  p {
    color: #2d2d2d;
  }
`;

const Blog = () => (
  <BlogContainer>
    <ul>
      <li>
        <Post>
          <Link prefetch href="/blog/self-forgiveness">
            <a>
              <h2>Self-Forgiveness</h2>
            </a>
          </Link>
          <time>2/12/2019</time>
          <p>
            Part 1 of 4. I start with empathy, because I think it might be the
            most essential. Without it, you’ll find it exceedingly hard to
            forgive yourself and own up to your mistakes.
          </p>
        </Post>
        <Post>
          <Link prefetch href="/blog/empathy">
            <a>
              <h2>Empathy</h2>
            </a>
          </Link>
          <time>2/12/2019</time>
          <p>
            Part 1 of 4. I start with empathy, because I think it might be the
            most essential. Without it, you’ll find it exceedingly hard to
            forgive yourself and own up to your mistakes.
          </p>
        </Post>
        <Post>
          <Link prefetch href="/blog/students-mindset">
            <a>
              <h2>A Student’s Mindset</h2>
            </a>
          </Link>
          <time>2/5/2019</time>
          <p>
            In this post I outline the shape of a little series I’m doing on
            what I consider the most important lesson of my first year as a
            software developer: a student’s mindset.
          </p>
        </Post>
      </li>
    </ul>
  </BlogContainer>
);

export default Blog;
