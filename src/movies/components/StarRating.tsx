import React from 'react';
import { Rating, ThinStar } from '@smastrom/react-rating';
import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';

interface StarRatingProps {
  rating: number;
  showLabel?: boolean;
}

const ratingStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#878787',
  inactiveFillColor: '#cbcbcb',
};

export const StarRating = ({ rating, showLabel }: StarRatingProps) => {
  const rate = parseFloat(rating.toFixed(1));
  return (
    <Wrapper>
      <Rating
        value={rate}
        readOnly
        itemStyles={ratingStyles}
        className="rating"
      />
      <p className="text">{showLabel && `${rate}/5`}</p>
    </Wrapper>
  );
};

const Wrapper = styled('div')({
  display: 'flex',
  columnGap: 8,

  '& .rating': {
    maxWidth: 100,
  },

  '& .text': {
    fontWeight: 600,
    fontSize: pxToRem(15),
  },
});

// TODO: implement star rating component
