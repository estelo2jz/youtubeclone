import React from 'react';
import {Link} from 'react-router-dom';

import './styles/PopularTags.scss';

const PopularTags = ({componentLink, tag}) => {
  return (
    <div className="popular-tags">
      <Link className="popular-tags__link" to={componentLink}>
        <p>{tag}</p>
      </Link>
    </div>
  )
}

export default PopularTags
