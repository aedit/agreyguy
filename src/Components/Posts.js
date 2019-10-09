import React from 'react'
import styled from 'styled-components'
import FeaturedBlogs from './FeaturedBlogs'

const blogs = [
	{
		title: 'Lorem, ipsum.',
		desc:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, totam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fuga iure quam error iusto aspernatur suscipit nobis sapiente enim temporibus.',
		img: 'https://unsplash.it/700',
	},
	{
		title: 'Lorem, ipsum.',
		desc:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, totam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fuga iure quam error iusto aspernatur suscipit nobis sapiente enim temporibus.',
		img: 'https://unsplash.it/800',
	},
	{
		title: 'Lorem, ipsum.',
		desc:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, totam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fuga iure quam error iusto aspernatur suscipit nobis sapiente enim temporibus.',
		img: 'https://unsplash.it/900',
	},
	{
		title: 'Lorem, ipsum.',
		desc:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, totam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fuga iure quam error iusto aspernatur suscipit nobis sapiente enim temporibus.',
		img: 'https://unsplash.it/1080',
	},
]

const BlogContainer = styled.section`
	display: flex;
	padding: 3rem 0;
	/* flex-direction: column; */
	justify-content: center;
	flex-wrap: wrap;
	/* min-height: 100vh; */
`

const AltFeaturedBlogs = styled(FeaturedBlogs)`
	/* width: 400px; */
	flex-basis: 90%;
	height: 480px;
	margin-bottom: 1rem;
	figcaption {
		width: 100%;
		height: 160px;
	}
	img {
		object-fit: cover;
	}
`

const StyledSelect = styled.select`
  width: 360px;
  background: #fff;
  border-radius: 1em;
  padding: 0.8em;
  outline: none;
  border: 2px solid black;
  margin: 1em;
`

const Posts = () => {
	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<StyledSelect name='category' id='categoty'>
					<option value='stories'>Stories</option>
					<option value='poems'>Poems</option>
					<option value='thoughts'>Thoughts</option>
				</StyledSelect>
			</div>
			<BlogContainer>
				{blogs.map((blog, i) => {
					return (
						<AltFeaturedBlogs key={i}>
							<img alt='blog banner' src={blog.img}></img>
							<figcaption>
								<h1>{blog.title}</h1>
								<p>{blog.desc}</p>
								<button>read</button>
							</figcaption>
						</AltFeaturedBlogs>
					)
				})}
			</BlogContainer>
		</>
	)
}

export default Posts
