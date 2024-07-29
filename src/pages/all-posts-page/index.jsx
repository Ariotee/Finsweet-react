import Categories from '~/components/sections/categories'
import AllPostList from '~/components/sections/all-posts'
import FeaturedPost from '~/components/sections/featured-post'
import JoinTeam from '~/components/sections/join-our-team'

const AllPosts = () => {
  return (
    <>
      <FeaturedPost />
      <AllPostList />
      <Categories />
      <JoinTeam />
    </>
  )
}

export default AllPosts
