import { ProfilePic } from './ProfilePic'

const faqs = [
  {
    question: 'Name',
    answer: 'Qiushi Pan / 潘 秋実',
  },
  {
    question: 'Interest',
    answer: `My interests are Machine Learning, Consciousness, App Development
          Hobby I enjoy Anime, Manga, Movies, and Games`,
  },
  {
    question: 'Links',
    answer: 'GitHub / Twitter / SpeakerDeck / Zenn / AtCoder Amazon Wish List',
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
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
