import Container from '../components/Container' 
import { getAllFilesFrontMatter } from '@/lib/mdx'

function Home({posts}) {
  return (
    <Container> 
      asdasd
    </Container>)
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  return { props: { posts } };
}

export default Home;