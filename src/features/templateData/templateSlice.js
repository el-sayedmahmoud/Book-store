import { createSlice } from "@reduxjs/toolkit";
// eslint-disable-next-line no-unused-vars
const templateSlice10 = createSlice({
  initialState: {
    navbar10: {
      icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706798279/logo_rcge0a.png",
      links: ["Home", "Best Seller"],
      darkPng:
        "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706805795/dark-mode-button_e9kiqi.png",
      lightPng:
        "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706805773/light-mode-button_ermmq3.png",
      DropdownIcon:
        "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706806280/caret-down-svgrepo-com_r9zuyy.svg",
      DropdownLinks: [
        {
          name: "Trending Books",
          link: "/#",
        },
        {
          name: "Best Selling",
          link: "/#",
        },
        {
          name: "Authors",
          link: "/#",
        },
      ],
      buttonText: "Order",
      buttonIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706806477/cart-shopping-shop-svgrepo-com_oxwiez.svg",
    },

    hero10: {
      backGroundImage: "",
      title: "Let Your Home Be Unique",
      description:
        "There are many variations of the passages of lorem Ipsum from available, variations of the passages.",
      buttonText: "Get Started",
      buttonIcon:
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",

      MainImgUrl:
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808857/templates/template_one/Photo_3_jpjtdv.jpg",
      Image1: "",
      Image2: "",
      Image3: "",
    },
    services10: {
      smTitle: "Trending Books",
      title: "Best Books",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Distinctio consectetur",
      starIcon: "",
      buttonText: "Order",
      blocks: [
        {
          imgUrl:
            "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808099/templates/template_one/icon_one_xvd7d6.svg",
          title: "Project Plan",
          description:
            "There are many variations of the passages of lorem Ipsum from available, majority.",
        },
        {
          imgUrl:
            "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808099/templates/template_one/icon_two_dptua1.svg",
          title: "Interior Work",
          description:
            "There are many variations of the passages of lorem Ipsum from available, majority.",
        },
        {
          imgUrl:
            "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808099/templates/template_one/icon_three_v71ltg.svg",
          title: "Realization",
          description:
            "There are many variations of the passages of lorem Ipsum from available, majority.",
        },
      ],
    },
    feature10: {
      imgUrl:
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813388/templates/template_one/Photo_sonnlx.jpg",
      title: "We Create The Art Of Stylish Living Stylishly",
      description:
        "It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layouts the points of using that it has a more-or-less normal.",
      icons: [
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813236/templates/template_one/Call_gqvv4l.svg",
          text: "",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813236/templates/template_one/Call_gqvv4l.svg",
          text: "",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813236/templates/template_one/Call_gqvv4l.svg",
          text: "",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813236/templates/template_one/Call_gqvv4l.svg",
          text: "",
        },
      ],
    },

    statistic10: {
      title: "We Create The Art Of Stylish Living Stylishly",
      bannerImg: "",
      AppStoreImg: "",
      PlayStoreImg: "",
    },

    teams10: {
      smTitle: "Trending Books",
      title: "Articles & News",
      description:
        "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.",
      cards: [
        {
          title: "Get Solution For Building Construction Work",
          description: "26 December,2022 ",
          imgUrl:
            "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718041/templates/template_one/article1.f88f54e6a4cdbf340b36_l3ujjw.png",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
          caption: "Kitchan Design",
        },
        {
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          description: "22 December,2022 ",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
          imgUrl:
            "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718042/templates/template_one/article2.43be768543cb8cfeaf07_atvwjd.png",
          caption: "Living Design",
        },
        {
          title: "Best For Any Office & Business Interior Solution",
          description: "25 December,2022 ",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
          imgUrl:
            "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718042/templates/template_one/article3.f759fde0c85f3fb92b22_c2tqkv.png",
          caption: "Interior Design",
        },
      ],
    },

    testimonial10: {
      smTitle: "Trending Books",
      title: "Articles & News",
      description:
        "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.",

      card: [
        {
          id: 1,
          name: "Victor",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/101/101",
        },
        {
          id: 1,
          name: "Satya Narayan",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/102/102",
        },
        {
          id: 1,
          name: "Sachin Tendulkar",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/103/103",
        },
      ],
    },

    footer10: {
      title: "",
      imgUrl:
        "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703101139/logo_ytwn3z.jpg",
      description: "Your mind shoud be stronger than your feeling, fly!",
      LocationIcon: "",
      mobileIcon: "",
      mediaIcons: [
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809141/templates/template_one/facebook_td263x.svg",
          url: "https://facebook.com",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809142/templates/template_one/x_yp3y5n.svg",
          url: "https://x.com",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809142/templates/template_one/linkedin_itbvp5.svg",
          url: "https://linkedin.com",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809141/templates/template_one/instagram_dlrab9.svg",
          url: "https://instagram.com",
        },
      ],

      items: [
        {
          title: "Important Links",
          links: ["Home", "About", "Contact", "Blog"],
        },
        {
          title: "Links",
          links: ["Home", "About", "Contact", "Blog"],
        },
        {
          title: "Location",
          links: ["Home", "About", "Contact", "Blog"],
        },
      ],
    },

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

  name: "templateSlice10",
  reducers: {
    updateAll: (state, action) => {
      const {
        section,
        variable,
        value,
        i,
        blockName,
        subBlockName,
        subIndex,
        objKey,
      } = action.payload;
      // sub means level 2 of fields
      if (i === undefined) {
        if (variable === null) {
          // edit object filed
          state[section][blockName][objKey] = value;
        } else {
          // edit normal field
          state[section][variable] = value;
        }
      } else {
        if (subIndex === undefined) {
          // edit array filed with index
          if (variable === null) state[section][blockName][i] = value;
          else {
            if (subBlockName === undefined) {
              // edit obj in array of objects
              state[section][blockName][i][variable] = value;
            } else {
              // edit sub obj directly
              state[section][blockName][i][subBlockName][variable] = value;
            }
          }
        } else {
          // edit sub element in array
          if (variable === null)
            state[section][blockName][i][subBlockName][subIndex] = value;
          else {
            // edit sub obj in array of objects
            state[section][blockName][i][subBlockName][subIndex][variable] =
              value;
          }
        }
      }
    },
  },
});

export const { updateAll } = templateSlice10.actions;
export default templateSlice10.reducer;
