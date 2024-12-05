import React from 'react';
import { motion } from 'framer-motion';
import './Blog.css';
// Import blog images
import blog3 from '../images/blog3.png';
import blog2 from '../images/blog2.png';

function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Evolution of Decentralized Systems",
      category: "web3",
      date: "March 20, 2024",
      readTime: "5 min",
      image: blog3,
      excerpt: "Exploring the revolutionary impact of decentralized systems on modern technology infrastructure...",
      tags: ["Technology", "Future", "Web3"],
      engagement: {
        views: "3.2K",
        comments: "124"
      }
    },
    {
      id: 2,
      title: "Understanding Smart Contract Security",
      category: "blockchain",
      date: "March 18, 2024",
      readTime: "7 min",
      image: blog2,
      excerpt: "Deep dive into the essential security practices for smart contract development...",
      tags: ["Security", "Development", "Blockchain"],
      engagement: {
        views: "2.8K",
        comments: "98"
      }
    }
  ];

  return (
    <section className="section blog-section">
      <div className="section-container">
        <div className="blog-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="header-content"
          >
            <div className="title-wrapper">
            <h2 className="section-title">
                Welcome to <span className="highlight">Insights and Articles</span>
            </h2>
            </div>
            <p className="subtitle">Exploring the Future of Web3 Technology</p>
          </motion.div>
        </div>

        <motion.div 
          className="blog-grid"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="blog-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="card-image-wrapper">
                <div className="image-overlay"></div>
                <img src={post.image} alt={post.title} className="card-image" />
                <div className="read-time-badge">
                  <span className="time-icon">⏱</span>
                  {post.readTime}
                </div>
              </div>
              
              <div className="card-content">
                <div className="card-meta">
                  <span className="post-date">
                    <span className="date-icon">📅</span>
                    {post.date}
                  </span>
                  <div className="engagement-stats">
                    <span className="views">
                      <span className="icon">👁</span>
                      {post.engagement.views}
                    </span>
                    <span className="comments">
                      <span className="icon">💭</span>
                      {post.engagement.comments}
                    </span>
                  </div>
                </div>
                
                <motion.h2 
                  className="card-title"
                  whileHover={{ color: 'var(--primary)' }}
                >
                  {post.title}
                </motion.h2>
                
                <p className="card-excerpt">{post.excerpt}</p>
                
                <div className="card-tags">
                  {post.tags.map(tag => (
                    <motion.span
                      key={tag}
                      className="tag"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: 'var(--primary)',
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <motion.div 
                  className="card-footer"
                  whileHover={{ x: 5 }}
                >
                  <button className="read-more-btn">
                    <span className="btn-text">Read Article</span>
                    <span className="btn-icon">→</span>
                  </button>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Blog;