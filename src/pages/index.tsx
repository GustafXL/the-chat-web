import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import HeaderMenu from '@/components/HeaderMenu';
import SectionOne from '@/components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import { useEffect, useState } from 'react';

export default function Home() {

  // const handleScroll = () => {
  // //   window.addEventListener('scroll', function(event) {
  // //     // var firstLocator:any = document.querySelector("#locator");
  // //     // const test = firstLocator.offsetTop
              
  // //     // console.log('event: ', event)
      
  // //     // console.log('window.pageYOffset', window.pageYOffset)
  // //     if(window.pageYOffset > 0 && window.pageYOffset < 100){
  // //       // document.querySelector("#s1").scrollIntoView();
  // //       // console.log('scroll down', window.pageYOffset)
  // //       // window.scrollTo({top: 2040, behavior: 'smooth'});
  // //     }
      
  // //     if(window.pageYOffset > 2040){ // presumisse que está na posição 2040 e quer ir para a posição 0
  // //       console.log('scroll down s3')
  // //       // window.scrollTo({top: 4082, behavior: 'smooth'});
  // //     }
      
  // //     if(window.pageYOffset < 2040){
  // //       console.log('scroll top s2')
  // //       // window.scrollTo({top: 0, behavior: 'smooth'});
  // //     }
      
  // //     // document.querySelector("#s2").scrollIntoView();
      
  // //     if(window.pageYOffset > 4082){
  // //       console.log('scroll top')
  // //       // window.scrollTo({top: 2040, behavior: 'smooth'});
  // //       // document.querySelector("#s3").scrollIntoView();
  // //     }
      
  // //     // if(window.pageYOffset > 2700 && window.screen.width <= 700) {
  // //     //     setResponsiveLayout(true)
  // //     // }
  // // }, true);

  // // preventScroll if false => ainda não rolou a página
  // // preventScroll if true => rolou a página

  // window.addEventListener('mousewheel', function(e: any){
    
  //   console.log(`e? `, e)

  //     if (e.wheelDelta === 120) {
  //         console.log('scrollDown')
  //       // scrollTop()
      
  //   } else {
  //       console.log('scrollDown')
  //       // scrollDown()
  //   }
  // })
  
  // // e.wheelDelta === 120 ? scrollTop() : scrollDown()
  // // if(e.preventDefault) { e.preventDefault(); }
  // }

  //   'scrollDown': {
  //     if ('section-1') {
  //       console.log('section-2')
  //     }

  //     if ('section-2') {
  //       console.log('section-3')
  //     }

  //     else {
  //       console.log('não faz nada')
  //     }
  //   }

  //   'scrollTop': {
  //     if ('section-2') {
  //       console.log('section-1')
  //     }

  //     if ('section-3') {
  //       console.log('section-2')
  //     }

  //     else {
  //       console.log('não faz nada')
  //     }
  //   }

  const saveSection = (section: string) => {
    localStorage.setItem('currentSection', section)
  }

  const getSavedSection = () => {
    const savedSection = localStorage.getItem('currentSection')
    return savedSection
  }

  const scrollTop = () => {
    console.log('scrollTop currentSection: ', getSavedSection())
    const currentSection = getSavedSection()
      if (currentSection === 'secondLocator') {
        saveSection('firstLocator')
        handleSectionToScroll('firstLocator')
      }

      if (currentSection === 'thirdLocator') {
        saveSection('secondLocator')
        handleSectionToScroll('secondLocator')
      }

      else {
        console.log('não faz nada')
      }
  }
  
  const scrollDown = () => {
    const currentSection = getSavedSection()
    console.log('scrollDown currentSection: ', currentSection)

      if (currentSection === 'firstLocator') {
        saveSection('secondLocator')
        handleSectionToScroll('secondLocator')
      }

      if (currentSection === 'secondLocator') {
        saveSection('thirdLocator')
        handleSectionToScroll('thirdLocator')
      }

      else {
        console.log('não faz nada')
      }
  }

  const handleSectionToScroll = (section: string) => {
    const firstLocator:any = document.querySelector("#s1");
    const secondLocator:any = document.querySelector("#s2");
    const thirdLocator:any = document.querySelector("#s3");
    // const locator: any = 'firstLocator'
    const locatorsAvailable:any = {firstLocator, secondLocator, thirdLocator}
    
    // console.log('locatorsAvailable: ', locatorsAvailable[section])
    locatorsAvailable[section].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest", offset: -1000});
  }

  useEffect(() => {
    const savedSection = localStorage.getItem('currentSection')

    if (savedSection === null) {
      saveSection('firstLocator')
    } else {
      handleSectionToScroll(savedSection)
    }
  }, [])

  // useEffect(() => {
  //   saveSection('section-1')
  //   handleScroll();
  // }, [])

  const handleScroll = (e: any) => {
    if (e.wheelDelta === 120) {
      console.log('scrollUp');
      scrollTop();
    } else {
      console.log('scrollDown');
      scrollDown();
    }
  };

  useEffect(() => {
    window.addEventListener('mousewheel', handleScroll);
    return () => {
      window.removeEventListener('mousewheel', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeaderMenu />

        <div className={styles.containerSections}>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>

      </main>
    </>
  )
}


