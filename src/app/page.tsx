import Footer from "../components/common/footer/footer";
import Header from "../components/common/header/header";
import IntroSection, { TIntroSection } from "../components/index/intro-section";

const introSectionData: TIntroSection[] = [
    {
        img: {
            order: 2,
            src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        text: {
            order: 1,
            str: "나만의 블로그를 만들어보세요",
        },
    },
    {
        img: {
            order: 1,
            src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        text: {
            order: 2,
            str: "자유롭게 작성하세요",
        },
    },
];

export default function Home() {
    return (
        <>
            <Header />
            <main className="max-w-screen-xl mx-auto min-h-screen p-4 ">
                {introSectionData.map((section) => (
                    <IntroSection key={section.text.str} {...section} />
                ))}
            </main>
        </>
    );
}
