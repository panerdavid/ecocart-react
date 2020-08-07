import React, { Component } from "react";
import Faq from "react-faq-component"; //DOCUMENTATION: https://www.npmjs.com/package/react-faq-component

const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "What on Earth is a carbon offset?",
      content: `Carbon offsets are a practical and effective way to reduce the effects of climate change by funding wind, solar, and other renewable energy projects.`,
    },
    {
      title: "Free carbon neutral orders? Sounds too good to be true.",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "How do I know the donations are going to the right place?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. 
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam. 
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat. 
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
        title: "Do you sell my data?",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. 
              Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam. 
              Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat. 
              Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "How can I find stores that support sustainable shopping?",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. 
              Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam. 
              Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat. 
              Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
  ],
};

const styles = {
  bgColor: "white",
  titleTextColor: "white",
  rowTitleColor: "black",
  rowContentColor: "black",
  arrowColor: "grey",
};

const config = {
  animate: true,
  arrowIcon: "⌄",
};

export default class FaqBox extends Component {
  render() {
    return (
      <div>
        <Faq data={data} styles={styles} config={config} />
      </div>
    );
  }
}
