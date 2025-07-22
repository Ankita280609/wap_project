// src/components/BlogPage.jsx
import React from 'react';

const samplePosts = [
  {
    id: 1,
    title: "5 Tips for Writing Insightful Product Reviews",
    image: "https://apptweak-blog.imgix.net/2024/12/cover-website_increase-reviews.png?auto=compress%2Cformat&fit=crop&h=358&q=95&w=716",
    excerpt:
      "Writing a great review means going beyond star‑ratings. Start by describing how you actually used the product—include timeframe, context, and any unusual use cases. Highlight the features that stood out (both good and bad), and back up your opinions with specific examples: \"The noise‑cancelling on these headphones let me focus on my 2‑hour Zoom meeting despite construction next door.\" Finally, end with a quick “would I recommend?” summary so readers know your overall verdict at a glance.",
  },
  {
    id: 2,
    title: "Top 7 Gadgets to Simplify Your Home Office",
    image: "https://www.providenthousing.com/wp-content/uploads/2024/07/BLOG-Top-gadgets-for-home-1.jpg",
    excerpt:
      "From under-desk footrests to ergonomic keyboard trays, these gadgets transform your workspace. A tidier desktop booster like a USB hub organizer can save you minutes every day. Add a smart lamp with adjustable color temp to reduce eye strain. And don’t forget cable management sleeves—keeping cords out of sight not only looks cleaner but also avoids tripping hazards. Finally, a quality webcam cover protects your privacy when you’re off‑camera.",
  },
  {
    id: 3,
    title: "How to Spot Fake Reviews Online",
    image: "https://images.ctfassets.net/3viuren4us1n/3iNYIC1kWo42WWj5BnOTkY/0f284187b6adc0ac59356e6969719d6a/Fake-Reviews.jpg?fm=webp&w=1920",
    excerpt:
      "Ever wonder if that 5‑star rave was real? Fake reviews often share these traits: overly generic praise (“Great product!” with zero specifics), repeated wording across multiple entries, and perfect timing (a flurry of 5‑star ratings all at once). Look for a mix of star‑levels—legit products get a few 1‑ or 2‑star complaints. Check reviewer profiles: if they only ever post praise for dozens of different brands, treat with caution. Finally, dig into the review text: names, dates, and personal anecdotes are good signs of authenticity.",
  },
  {
    id: 4,
    title: "Eco‑Friendly Packaging: Brands That Deliver",
    image: "https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/05/ecofriendly-food-packaging.jpg",
    excerpt:
      "Sustainable packaging has come a long way. Brand A uses mushroom‑based foam that biodegrades in days. Brand B offers refill pouches that cut plastic use by 80%. Brand C sources 100% recycled cardboard and water‑based inks for printing. Each of these innovators proves you don’t need single‑use plastics to ship safely. Bonus: many customers report these boxes look and feel more premium—a win for both planet and brand image.",
  },
  {
    id: 5,
    title: "Mastering Mobile Photography in 5 Steps",
    image: "https://www.dundalkdemocrat.ie/resizer/640/-1/true/1611750433165.jpg--top_tips_for_taking_stunning_lockdown_photography_with_a_smartphone.jpg?1611750433000",
    excerpt:
      "Want sharper, more dynamic phone shots? 1) Clean your lens before every shoot. 2) Use gridlines (Rule of Thirds) to compose balanced frames. 3) Tap to set exposure on your subject’s face, not the background. 4) Try burst mode for action shots, then pick the sharpest frame. 5) Edit with a two‑step app workflow: first adjust exposure and contrast, then apply a gentle color filter. These small tweaks can make your Instagram feed look like a professional portfolio.",
  },
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      <h1>Our Blog</h1>
      <div className="blog-list">
        {samplePosts.map(post => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}