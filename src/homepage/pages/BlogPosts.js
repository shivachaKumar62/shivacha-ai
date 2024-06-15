import React from 'react'
import Button from '../../customcomponent/Button';

const BlogPosts = () => {
  return (
    <div className="py-[96px]">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-6">
          <div>
            <div>
              <p className="text-[#212121] font-semibold font-worksans text-[40px]">
                Turn blog posts into engaging videos for improved SEO and lower
                bounce rates.
              </p>
            </div>
            <div className="pt-[24px] pb-[36px]">
              <ul className='list-disc pl-[15px] text-wrap text-[#565656] font-medium text-lg font-worksans space-y-[16px]'>
                <li >
                  Transform them into captivating videos to breathe new life
                  into your content.
                </li>
                <li>
                  Video content can improve your website's search engine
                  rankings, attracting more organic traffic.
                </li>
                <li>
                  Engaging videos can encourage visitors to stay longer on your
                  site, reducing bounce rates.
                </li>
                <li>
                  Dynamic videos keep viewers engaged, increasing the likelihood
                  of them staying on your website.
                </li>
              </ul>
            </div>
            <div>
              <Button
                text="Get Started For Trial"
                bg="white"
                textColor="blue-500"
                iconBg="blue-500"
                iconText="white"
                borderPart="border"
              />
            </div>
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/blogpost.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPosts
