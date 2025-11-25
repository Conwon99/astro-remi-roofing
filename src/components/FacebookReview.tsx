import React from "react";

interface FacebookReviewProps {
  rating?: number;
  reviewCount?: number;
  facebookUrl?: string;
  className?: string;
}

const FacebookReview = ({
  rating = 5.0,
  reviewCount = 39,
  facebookUrl = "https://www.facebook.com/REMIROOFINDLTD",
  className = "",
}: FacebookReviewProps) => {
  return (
    <a
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Facebook rating ${rating.toFixed(1)} from ${reviewCount} reviews`}
      className={`flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity shrink-0 ${className}`}
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>

      <span className="text-sm sm:text-base font-bold text-slate-300 whitespace-nowrap">
        {rating.toFixed(1)}
      </span>

      <div className="flex items-center gap-0.5 shrink-0" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
};

export default FacebookReview;


