import SectionCard from "../components/card/SectionCard"
import Hero1 from "../components/hero/Hero1"
import BaseLayout from "../components/layout/BaseLayout"

const index = () => {
  return (
    <BaseLayout hamburgerBtnShow={false}>
      <Hero1 />
      
      <div className="w-full flex justify-center">
        <div className="container px-2 md:px-8 my-16">
          <div className="flex gap-8 xl:gap-16 w-full justify-center flex-wrap">
            <SectionCard title="手機基礎操作" summary="隨時都能用的生活小技能" path="/course?section=1" />
            <SectionCard title="ChatGPT" summary="智慧小幫手" path="/course?section=2" />
          </div>
        </div>
      </div>

    </BaseLayout>
  )
}

export default index