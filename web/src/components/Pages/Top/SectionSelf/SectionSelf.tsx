import { ProfilePic } from './ProfilePic'

const intro: { title: string; content: string }[] = [
  {
    title: 'As a researcher',
    content: `Qiushi Pan (潘 秋実) is a Ph.D. student in Doctoral Programs in Intelligent and Mechanical Interaction Systems at the University of Tsukuba under the supervision of Prof. Taro Tezuka. His research interests include offline reinforcement learning, signal processing, image processing, and educational adaptation.`,
  },
  {
    title: 'As a coder',
    content: `He is an open-source enthusiast. He builds fun projects and publishes them as OSS in his spare time. He made the CommentScreen app and co-founded its company. He writes code in Rust, Python, and TypeScript. He is not only good at frontend but also familiar with backend and cross-platform apps.`,
  },
  {
    title: 'As a gamer',
    content: `He loves playing games. He used to play the role of regional community manager for the game Vainglory. His interest in games also stimulates his interest in game development and AI.`,
  },
]

export const SelfIntroduction = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">About me</h2>
            <div className="mt-4 text-lg text-gray-500">
              <ProfilePic />
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {intro.map((faq) => (
                <div key={faq.title}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.title}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {faq.content}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
