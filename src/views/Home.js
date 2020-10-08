import React from 'react';
import { SearchButtonCard } from '../components/Card';
import Footer from '../components/Footer';
import HeadLines from '../components/HeadLines';
import Layout from '../components/Layout';

const Home = () => {
	return (
		<Layout>
			<div className='container'>
				<SearchButtonCard />
				<HeadLines />
				<Footer />
			</div>
		</Layout>
	);
};

export default Home;
