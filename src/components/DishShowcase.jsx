import React, { useState, useEffect, useCallback } from 'react';
import './DishShowcase.css';

/**
 * DishShowcase - A reusable component for showcasing menu items
 *
 * @param {Object} props
 * @param {string} props.title - Main title of the dish/thali
 * @param {string} props.subtitle - Subtitle or tagline
 * @param {Object} props.heritage - Heritage section content
 * @param {string} props.heritage.title - Heritage section title
 * @param {string} props.heritage.description - Heritage description text
 * @param {Object} props.mainImage - Main showcase image
 * @param {string} props.mainImage.src - Image source URL
 * @param {string} props.mainImage.alt - Image alt text
 * @param {string} props.mainImage.title - Section title
 * @param {string} props.mainImage.description - Section description
 * @param {Array} props.dishes - Array of dish objects
 * @param {string} props.dishesTitle - Title for the dishes section
 */
const DishShowcase = ({
  title = "Dish Title",
  subtitle = "A culinary experience",
  heritage = {
    title: "The Culinary Heritage",
    description: "Description of the culinary heritage..."
  },
  mainImage = {
    src: "",
    alt: "Main dish",
    title: "The Complete Plate",
    description: "A symphony of flavors"
  },
  dishes = [],
  dishesTitle = "Explore Each Dish"
}) => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle escape key to close modal
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openModal = (dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDish(null);
  };

  return (
    <div className="dish-showcase-container">
      {/* Hero Header */}
      <header className="hero-header">
        <h1>{title}</h1>
        <div className="subtitle">{subtitle}</div>
      </header>

      {/* Heritage Section */}
      <section className="history-box">
        <h2>{heritage.title}</h2>
        <p>{heritage.description}</p>
      </section>

      {/* Main Image Showcase */}
      <section className="thali-showcase">
        <h2>{mainImage.title}</h2>
        <p>{mainImage.description}</p>
        {mainImage.src && (
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="main-thali-image"
          />
        )}
      </section>

      {/* Dishes Grid */}
      <section className="ingredients-section">
        <h2>{dishesTitle}</h2>
        <div className="grid-container">
          {dishes.map((dish, index) => (
            <div
              key={dish.id || index}
              className="ingredient-card"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              onClick={() => openModal(dish)}
            >
              <i className={`${dish.icon} card-icon`}></i>
              <h3>{dish.name}</h3>
              <p>{dish.shortDescription}</p>
              <div className="tap-hint">Tap to explore →</div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Overlay */}
      <div
        className={`modal-overlay ${isModalOpen ? 'open' : ''}`}
        onClick={closeModal}
      />

      {/* Detail Modal */}
      <div className={`detail-card ${isModalOpen ? 'open' : ''}`}>
        {selectedDish && (
          <>
            <div className="card-header">
              <h2>{selectedDish.name}</h2>
              <button className="close-icon" onClick={closeModal}>
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            <div className="card-body">
              {selectedDish.image && (
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="modal-food-image"
                />
              )}

              {selectedDish.story && (
                <div className="data-block">
                  <span className="data-label">
                    {selectedDish.storyLabel || "The Story"}
                  </span>
                  <p className="data-text">{selectedDish.story}</p>
                </div>
              )}

              {selectedDish.benefits && (
                <div className="data-block">
                  <span className="data-label">
                    {selectedDish.benefitsLabel || "Benefits"}
                  </span>
                  <p className="data-text">{selectedDish.benefits}</p>
                </div>
              )}

              {selectedDish.stats && (
                <div className="data-block">
                  <span className="data-label">Vital Stats (Per Serving)</span>
                  <div className="vital-stats">
                    <div className="stat-box">
                      <strong>{selectedDish.stats.calories}</strong>
                      <span>Energy</span>
                    </div>
                    <div className="stat-box">
                      <strong>{selectedDish.stats.protein}</strong>
                      <span>Protein</span>
                    </div>
                    <div className="stat-box">
                      <strong>{selectedDish.stats.fat}</strong>
                      <span>Fats</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DishShowcase;
