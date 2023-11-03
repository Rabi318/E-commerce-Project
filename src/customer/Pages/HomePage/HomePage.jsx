import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'

export default function HomePage() {
    return (
        <div>
            <MainCarosel />
            <div className='space-y-10 py-20 '>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Best of Electronics"}/>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Sprots,Health & More"}/>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Toys"}/>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Festival Wear"}/>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Home and Kitchen Essentials"}/>
            </div>


        </div>
    )
}
