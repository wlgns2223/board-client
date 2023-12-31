import classNames from "classnames";
import Image from "next/image";

export type TIntroSection = {
    text: {
        str: string;
        order: 1 | 2;
    };
    img: {
        src: string;
        order: 1 | 2;
    };
};

export default function IntroSection({ text, img }: TIntroSection) {
    return (
        <section className="pt-[120px] pb-[50px] flex flex-col gap-y-[100px]">
            <h2 className="sr-only">{"소개 섹션"}</h2>
            <div className="flex gap-x-4 items-start w-[998px] justify-between">
                <p
                    className={classNames(`text-[48px] font-bold break-keep whitespace-pre-line`, {
                        "order-1 text-start": text.order === 1,
                        "order-2 text-end": text.order === 2,
                    })}
                >
                    {text.str}
                </p>
                <div
                    className={classNames(`relative aspect-[4/3] w-[550px] flex-shrink-0`, {
                        "order-1": img.order === 1,
                        "order-2": img.order === 2,
                    })}
                >
                    <Image fill alt="소개이미지" src={img.src} />
                </div>
            </div>
        </section>
    );
}
