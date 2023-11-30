import { Instagram } from '@mui/icons-material'
import classNames from 'classnames'
import { Metadata } from 'next'
import Image from 'next/image'

import { getCreator } from '@/apis/creator'
import { getSalesSiteList } from '@/apis/salesSite'
import { getSnsList } from '@/apis/sns'
import Icon from '@/components/atoms/Icon'
import Section from '@/components/templates/Section'
import { ColorEnum } from '@/types'
import { labelFontFace } from '@/utils/font'

import styles from './page.module.scss'

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
    return (
        <div className={styles['container']}>
            <Section title="Story" button={false} color={ColorEnum.Secondary}>
                <div className={styles['content']}>
                    <div className={styles['column']}>
                        <div className={styles['image']}>
                            <Image src="/image/about/story.jpg" fill alt="story" sizes="100%" style={{ objectFit: 'cover', borderRadius: 24 }} />
                        </div>
                    </div>
                    <div className={styles['column']}>
                        <div className={styles['message']}>
                            <div className={styles['message__wrapper']}>
                                <p>とこりりはハンドメイドのマクラメ編み</p>
                                <p style={{ marginBottom: 20 }}>アクセサリーを制作・販売しているお店です。</p>
                                <p>仕事や出産、育児、家事...</p>
                                <p>慌ただしい毎日の中で</p>
                                <p>頑張る女性の味方になりたい、</p>
                                <p style={{ marginBottom: 20 }}>そんな想いでとこりりは生まれました。</p>
                                <p>とこりりのモノづくりの根底には</p>
                                <p>「人の役に立ちたい」</p>
                                <p>「私の作品で元気づけたい」</p>
                                <p>という思いがあり、</p>
                                <p>制作活動の原動力となっています。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section title="Concept" button={false} color={ColorEnum.Secondary}>
                <div className={styles['content']}>
                    <div className={styles['column']}>
                        <div className={styles['column__wrapper']}>
                            <div className={classNames(styles['image'], styles['small'])}>
                                <Image
                                    src="/image/about/concept1.jpg"
                                    fill
                                    alt="concept1"
                                    sizes="100%"
                                    style={{ objectFit: 'cover', borderRadius: 24 }}
                                />
                            </div>
                            <div className={styles['sub-title']}>マクラメ編みの繊細さ</div>
                            <div className={styles['message']}>
                                <div className={styles['message__wrapper']}>
                                    <p>マクラメ編みとは</p>
                                    <p>手で紐を「結ぶ」 という工程を繰り返し</p>
                                    <p style={{ marginBottom: 20 }}>模様を生み出す技法のこと。</p>
                                    <p>同じデザインで編んでも使用する糸によって</p>
                                    <p style={{ marginBottom: 20 }}>仕上がりの印象が大きく変化するマクラメ。</p>
                                    <p>作品に合わせて材質・艶感・質感・太さなど</p>
                                    <p style={{ marginBottom: 20 }}>を選定しています。</p>
                                    <p>ハンドメイドだからこそ生み出せる繊細な模様を</p>
                                    <p>ぜひお楽しみください♪</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['column']}>
                        <div className={styles['column__wrapper']}>
                            <div className={classNames(styles['image'], styles['small'])}>
                                <Image
                                    src="/image/about/concept2.jpg"
                                    fill
                                    alt="concept2"
                                    sizes="100%"
                                    style={{ objectFit: 'cover', borderRadius: 24 }}
                                />
                            </div>
                            <div className={styles['sub-title']}>オシャレなだけじゃない+α</div>
                            <div className={styles['message']}>
                                <div className={styles['message__wrapper']}>
                                    <p>「日常の小さな悩みを解決する」</p>
                                    <p style={{ marginBottom: 20 }}>「目に留まるたび励まされる」</p>
                                    <p>そんなモノづくりを大切にしています。</p>
                                    <p>アロマを楽しむアイテムや、</p>
                                    <p>静電気対策に役立つアイテム、</p>
                                    <p style={{ marginBottom: 20 }}>大事な人と分かち合うお揃いアイテムなど</p>
                                    <p>「オシャレなだけじゃない！」</p>
                                    <p style={{ marginBottom: 20 }}>「あったら、ちょっと嬉しい♪」</p>
                                    <p>アクセサリーを制作しています。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section title="Story" button={false} color={ColorEnum.Secondary}>
                <div className={styles['content']}>
                    <div className={styles['column']}>
                        <div className={styles['image']}>
                            <Image src="/image/about/creator.jpg" fill alt="creator" sizes="100%" style={{ objectFit: 'cover', borderRadius: 24 }} />
                        </div>
                    </div>
                    <div className={styles['column']}>
                        <div className={styles['column__wrapper']}>
                            <div className={classNames(labelFontFace.className, styles['creator-name'])}>tku</div>
                            <div className={styles['message']}>
                                <div className={styles['message__wrapper']}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className={styles['year']}>2016年</td>
                                                <td className={styles['history']}>
                                                    <p style={{ marginBottom: 12 }}>大手服飾品製造メーカー入社</p>
                                                    <p>色彩学と品質管理について学ぶ</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={styles['year']}>2018年</td>
                                                <td className={styles['history']}>
                                                    <p>フリマサイトにて、</p>
                                                    <p>アクセサリー作家 tku(とく)として</p>
                                                    <p style={{ marginBottom: 12 }}>ハンドメイド作品の販売開始</p>
                                                    <p>独学でマクラメ編みの技術を磨く</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={styles['year']}>2020年</td>
                                                <td className={styles['history']}>
                                                    <p>オンラインショップにて、</p>
                                                    <p>マクラメ編み作品の販売開始</p>
                                                    <p>とこりり開業準備をする</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={styles['year']}>2022年</td>
                                                <td className={styles['history']}>
                                                    <p>作家活動を拡充するため、</p>
                                                    <p style={{ marginBottom: 12 }}>服飾品メーカー退社</p>
                                                    <p>とこりりを個人事業開業する</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section title="Relation" button={false} color={ColorEnum.Secondary}>
                <div className={classNames(styles['content'], styles['relation'])}>
                    <div className={styles['column']}>
                        <div className={styles['column__wrapper']}>
                            <div className={classNames(labelFontFace.className, styles['site'])}>SNS</div>
                            <div className={styles['button-area']}>
                                {snsList.map((v) => (
                                    <Icon key={v.name} size={90} color={ColorEnum.Accent}>
                                        <div className={styles['icon-content']}>
                                            <div className={styles['sns-icon']}>
                                                <Instagram />
                                            </div>
                                            <div className={styles['sns-name']}>{v.name}</div>
                                        </div>
                                    </Icon>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles['column']}>
                        <div className={styles['column__wrapper']}>
                            <div className={classNames(labelFontFace.className, styles['site'])}>Shop Site</div>
                            <div className={styles['button-area']}>
                                {salesSiteList.map((v) => (
                                    <Icon key={v.name} size={90} color={ColorEnum.Accent}>
                                        <div className={styles['sales-site-name']}>{v.name}</div>
                                    </Icon>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default About
