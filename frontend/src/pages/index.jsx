import { useRef } from "react";
import SectionCard from "../components/card/SectionCard"
import Hero1 from "../components/hero/Hero1"
import BaseLayout from "../components/layout/BaseLayout"

const Index = () => {
  const coursesSection = useRef(null);
  return (
    <BaseLayout hamburgerBtnShow={false}>
      <Hero1 height={400} title="樂齡數位學習平台" description="" btnText="開始學習！" btnAction={() => coursesSection.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
      
      <div className="w-full flex justify-center" ref={coursesSection}>
        <div className="container px-2 md:px-8 my-16">
          <div className="flex gap-8 xl:gap-16 w-full justify-center flex-wrap">
            <SectionCard title="手機基礎操作" summary="隨時都能用的生活小技能" path="/course?id=1" />
            <SectionCard title="ChatGPT" summary="智慧小幫手" path="/course?id=2" />
          </div>
        </div>
      </div>

    </BaseLayout>
  )
}

export default Index