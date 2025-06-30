
import React from 'react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "luke",
      game: "Fortnite",
      avatar: "/lovable-uploads/5d38dacc-fd94-4532-ba05-b2d595051eb5.png",
      review: "JUST DROPPED 65 KILLS IN CASH CUP BEST CHEAT EVER",
      rating: 5
    },
    {
      name: "kbmfab",
      game: "Fortnite",
      avatar: "/lovable-uploads/b8eae0bb-5ce7-4814-ac52-559e4330f4a6.png",
      review: "+rep Zombie not only provides an excellent Fortnite cheat but also backs it up with exceptional support. Any issues I've had were resolved quickly. Their dedication to customer satisfaction is truly impressive!",
      rating: 5
    },
    {
      name: "levert 185",
      game: "Perm Spoofer",
      avatar: "/lovable-uploads/0d40d1cb-bb2f-49a4-9cb8-c99a753282c5.png",
      review: "+rep amazing spoofer, instant just follow instructions and it will work",
      rating: 5
    },
    {
      name: "kbmfab",
      game: "Fortnite",
      avatar: "/lovable-uploads/b8eae0bb-5ce7-4814-ac52-559e4330f4a6.png",
      review: "+rep had it before and i bought it again very ud was playing legit in tokens",
      rating: 5
    },
    {
      name: "harry",
      game: "Fortnite",
      avatar: "/lovable-uploads/e44a0ba7-640c-4f51-8222-d4642221779e.png",
      review: "+rep zombie, raging for 2 days now in ranked no ban, just need to watch out for spectators. Got lifetime",
      rating: 5
    },
    {
      name: "rebuda",
      game: "Fortnite",
      avatar: "/lovable-uploads/1b6b2d10-24fa-4963-b406-e075b82cd380.png",
      review: "+rep Zombie, raging for 2 days now in ranked no ban, just need to watch out for spectators. Got lifetime",
      rating: 5
    },
    {
      name: "levert 185",
      game: "Perm Spoofer",
      avatar: "/lovable-uploads/0d40d1cb-bb2f-49a4-9cb8-c99a753282c5.png",
      review: "5 Cup. Although there wasn't a video guide, it performed really well. I achieved a solid placement and didn't face any issues. I definitely recommend it!",
      rating: 5
    },
    {
      name: "luke", 
      game: "Fortnite",
      avatar: "/lovable-uploads/5d38dacc-fd94-4532-ba05-b2d595051eb5.png",
      review: "JUST DROPPED 65 KILLS IN CASH CUP BEST CHEAT EVER",
      rating: 5
    }
  ];

  const StarIcon = () => (
    <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
    </svg>
  );

  return (
    <div className="bg-[#0A0A0B] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
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

        {/* Reviews Grid - Vertical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-[#1A1A1A] rounded-2xl p-6 border border-gray-800 hover:border-[#0036D6]/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">{review.name}</h4>
                  <p className="text-gray-400 text-sm">{review.game}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
