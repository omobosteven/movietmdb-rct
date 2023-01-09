import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';

interface StarRatingProps {
  rating: number;
  showLabel?: boolean;
}

// Star solid	&#9733;

export const StarRating = ({ rating, showLabel }: StarRatingProps) => {
  const rate = parseFloat(rating.toFixed(1));
  return (
    <Wrapper>
      <Rating>
        {[...new Array(5)].map((item, index) => (
          <span
            key={index}
            className={`star${Math.round(rate) > index ? ' star-filled' : ''}`}
          >
            &#9733;
          </span>
        ))}
      </Rating>
      <p className="text">{showLabel && `${rate}/5`}</p>
    </Wrapper>
  );
};

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',

  '& .rating': {
    maxWidth: 100,
  },

  '& .text': {
    fontWeight: 600,
    fontSize: pxToRem(16),
    marginLeft: 5,
    lineHeight: 1,
  },
});

const Rating = styled('div')({
  '& .star': {
    color: '#cbcbcb',
    fontSize: pxToRem(22),
    marginRight: 5,

    '&-filled': {
      color: '#878787',
    },
  },
});
