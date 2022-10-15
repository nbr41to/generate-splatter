import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { sampleColors } from '../src/point';
import { generateSVGImage } from '../src/splatter';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.innerHTML = generateSVGImage(sampleColors[0]);
  }, []);

  return (
    <div>
      <h1>splatter sample</h1>
      <div id='canvas' />
    </div>
  );
};

export default Home;
