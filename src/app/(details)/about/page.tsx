import { Metadata } from 'next'

import { getCreator } from '@/apis/creator'
import { getSalesSiteList } from '@/apis/salesSite'
import { getSnsList } from '@/apis/sns'
import AlertTemplate from '@/components/temlates/AlertTemplate'

export async function generateMetadata(): Promise<Metadata> {
    const title = 'とこりりについて | とこりり'
    const creator = await getCreator()
    const description =
        creator && creator.introduction ? creator.introduction : 'とこりりはハンドメイドのマクラメ編みアクセサリーを制作・販売しているお店です。'
    const image = creator && creator.apiPath ? creator.apiPath : ''
    return {
        metadataBase: new URL(process.env.DOMAIN_URL || ''),
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            images: [image],
        },
        twitter: {
            title,
            description,
            images: [image],
        },
    }
}

const About = async () => {
    const snsList = await getSnsList()
    const salesSiteList = await getSalesSiteList()
    return <AlertTemplate snsList={snsList} salesSiteList={salesSiteList} />
}

export default About
