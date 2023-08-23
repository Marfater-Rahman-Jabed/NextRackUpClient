import Image from 'next/image'
import HeroSection from './Component/HeroSection/HeroSection'
import WorkFastDiv from './Component/WorkFasterDiv/WorkFasterDiv'
import PostPhotosSection from './Component/PostPhotoSection/PostPhotoSection'
import MakesDiv from './Component/MakesDiv/MakesDiv'
import PowerFullAppSection from './Component/PowerfullAppSection/PowerfullAppSection'
import BeautySection from './Component/BeautySection/BeautySection'
import MemorySection from './Component/MemorySection/MemorySection'
import CrossPlatformSection from './Component/CrossPlateformSection/CrossPlateformSection'
import SimpleInterfaceSection from './Component/SimpleInterfaceSection/SimpleInterfaceSection'
import CustomerReviewSection from './Component/CustomerReviewSection/CustomerReviewSection'
import UnLockSection from './Component/UnlockPowerFulSection/UnlockPowerFulSection'
import QuestionSection from './Component/QuestionSection/QuestionSection'
import AliThemeSection from './Component/AlithemeSection/AliThemeSection'
import SubscriptionSection from './Component/SubscriptionSection/SubscriptionSection'


export default function Home() {
  return (
    <main className="">
      <HeroSection></HeroSection>
      <WorkFastDiv></WorkFastDiv>
      <PostPhotosSection></PostPhotosSection>
      <MakesDiv></MakesDiv>
      <PowerFullAppSection></PowerFullAppSection>
      <BeautySection></BeautySection>
      <MemorySection></MemorySection>
      <CrossPlatformSection></CrossPlatformSection>
      <SimpleInterfaceSection></SimpleInterfaceSection>
      <CustomerReviewSection></CustomerReviewSection>
      <UnLockSection></UnLockSection>
      <QuestionSection></QuestionSection>
      <AliThemeSection></AliThemeSection>
      <SubscriptionSection></SubscriptionSection>
    </main>
  )
}
