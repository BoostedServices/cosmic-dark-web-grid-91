
import React from 'react';

const ReviewsSection = () => {
  const ReviewsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none"><path fill="#0036D6" fill-opacity="0.5" fill-rule="evenodd" d="M5.172 6.172C4 7.343 4 9.229 4 13v5.586c0 .89 1.077 1.337 1.707.707l2.147-2.147c.072-.072.108-.108.154-.127s.097-.019.2-.019H14c1.864 0 2.796 0 3.53-.305a4 4 0 0 0 2.165-2.164C20 13.796 20 12.864 20 11s0-2.796-.305-3.53a4 4 0 0 0-2.164-2.166C16.796 5 15.864 5 14 5h-2C8.229 5 6.343 5 5.172 6.172" clip-rule="evenodd"/><path stroke="#0036D6" stroke-linecap="round" stroke-linejoin="round" d="M8.5 9.5h7m-7 3h5" stroke-width="1"/></g></svg>;

  const reviews = [
    {
      name: "luke",
      game: "Fortnite",
      avatar: "/Uploads/5d38dacc-fd94-4532-ba05-b2d595051eb5.png",
      review: "JUST DROPPED 65 KILLS IN CASH CUP BEST CHEAT EVER"
    },
    {
      name: "kbmfab",
      game: "Fortnite",
      avatar: "/Uploads/b8eae0bb-5ce7-4814-ac52-559e4330f4a6.png",
      review: "+rep Starz not only provides an excellent Fortnite cheat but also backs it up with exceptional support. Any issues I've had were resolved quickly."
    },
    {
      name: "levert 185",
      game: "Perm Spoofer",
      avatar: "/Uploads/0d40d1cb-bb2f-49a4-9cb8-c99a753282c5.png",
      review: "+rep amazing spoofer, instant just follow instructions and it will work"
    },
    {
      name: "harry",
      game: "Fortnite",
      avatar: "/Uploads/e44a0ba7-640c-4f51-8222-d4642221779e.png",
      review: "+rep Starz, raging for 2 days now in ranked no ban, just need to watch out for spectators. Got lifetime"
    },
    {
      name: "rebuda",
      game: "Fortnite",
      avatar: "/Uploads/1b6b2d10-24fa-4963-b406-e075b82cd380.png",
      review: "Starz is incredible, raging for 2 days now in ranked no ban, just need to watch out for spectators. Got lifetime"
    },
    {
      name: "alex94",
      game: "Temp Spoofer",
      avatar: "/Uploads/b8eae0bb-5ce7-4814-ac52-559e4330f4a6.png",
      review: "5 Cup performance was solid. Although there wasn't a video guide, it performed really well. I achieved a solid placement and didn't face any issues."
    },
    {
      name: "pro_gamer",
      game: "Fortnite",
      avatar: "/Uploads/5d38dacc-fd94-4532-ba05-b2d595051eb5.png",
      review: "Best investment I've made for gaming. The software is undetected and works flawlessly every time."
    },
    {
      name: "shadow123",
      game: "Perm Spoofer",
      avatar: "/Uploads/0d40d1cb-bb2f-49a4-9cb8-c99a753282c5.png",
      review: "Amazing results with this spoofer. Been using it for months without any issues. Highly recommended!"
    }
  ];

  const ReviewCard = ({ review, index }: { review: typeof reviews[0], index: number }) => (
    <div 
      className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-6 border border-gray-800/50 shadow-lg mb-6 hover:border-[#0036D6]/30 transition-all duration-300 flex-shrink-0"
    >
      <div className="flex items-center gap-3 mb-4">
        <img 
          src={review.avatar} 
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-700"
        />
        <div>
          <h4 className="text-white font-semibold">{review.name}</h4>
          <p className="text-[#0036D6] text-sm font-medium">{review.game}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">
        {review.review}
      </p>
    </div>
  );

  return (
    <div className="bg-[#0A0A0B] py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4 gap-2">
            <ReviewsIcon />
            <span className="text-[#0036D6] text-sm font-semibold tracking-wider">Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hear from our customers
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Read why thousands of gamers trust our software<br />
            to dominate every match.
          </p>
        </div>

        <div className="relative h-[600px] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0A0B] to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0B] to-transparent z-10"></div>
          
          <div className="flex gap-6 animate-infinite-scroll-vertical">
            <div className="flex flex-col gap-6 min-w-[280px]">
              {Array.from({ length: 6 }).map((_, setIndex) => (
                <React.Fragment key={`col1-set-${setIndex}`}>
                  {reviews.slice(0, 2).map((review, index) => (
                    <ReviewCard key={`col1-${setIndex}-${index}`} review={review} index={index} />
                  ))}
                </React.Fragment>
              ))}
            </div>

            <div className="flex flex-col gap-6 min-w-[280px]" style={{ animationDelay: '7.5s' }}>
              {Array.from({ length: 6 }).map((_, setIndex) => (
                <React.Fragment key={`col2-set-${setIndex}`}>
                  {reviews.slice(2, 4).map((review, index) => (
                    <ReviewCard key={`col2-${setIndex}-${index}`} review={review} index={index} />
                  ))}
                </React.Fragment>
              ))}
            </div>

            <div className="flex flex-col gap-6 min-w-[280px]" style={{ animationDelay: '15s' }}>
              {Array.from({ length: 6 }).map((_, setIndex) => (
                <React.Fragment key={`col3-set-${setIndex}`}>
                  {reviews.slice(4, 6).map((review, index) => (
                    <ReviewCard key={`col3-${setIndex}-${index}`} review={review} index={index} />
                  ))}
                </React.Fragment>
              ))}
            </div>

            <div className="flex flex-col gap-6 min-w-[280px]" style={{ animationDelay: '22.5s' }}>
              {Array.from({ length: 6 }).map((_, setIndex) => (
                <React.Fragment key={`col4-set-${setIndex}`}>
                  {reviews.slice(6, 8).map((review, index) => (
                    <ReviewCard key={`col4-${setIndex}-${index}`} review={review} index={index} />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
