import React from 'react';
import { Link } from 'react-router-dom';
// components
import ArtistCard from '../../../../components/ArtistCard/ArtistCard';
// styles
import styles from './ArtistsSection.module.css';
// assets (headshots)
import khadija from '../../../../assets/imgs/headshots/Khadija Aziz_Headshot_June 2021_Photographer_Lisa_Murzin.jpeg';
import laura from '../../../../assets/imgs/headshots/Laura Kay Keeling Square.jpg';
import kj from '../../../../assets/imgs/headshots/headshot-kj.jpeg';
import yahn from '../../../../assets/imgs/headshots/Yahn LOL Photo.jpg';
import nicole from '../../../../assets/imgs/headshots/NicoleKrstin_headshot.jpg';

export default function ArtistsSection() {
  let khadijaBio = (
    'Khadija Aziz (she/her) investigates image-making with textiles using manipulation, experimentation, and the ever-shifting nature of cloth. Her process-based practice bridges the gaps between textile-making techniques and digital technologies to generate unexpected outcomes through translation, chance, and distortion. She is currently pursuing an MFA at Concordia University’s Fibre & Material Practices program. In recognition of her creative practice, she has most recently received the Shanks Memorial Award in Textiles from Craft Ontario and the Creative Promise Award from Surface Design Association in 2020.'
  );

  let lauraBio = (
    'Laura Kay Keeling (she/her/they) is a visual artist living and working inT’karonto. Her work encompasses analog photography, video, collage and installation-based projects. Exploring and unpacking emotions through the creation of new work, while examining concepts related to “the visitor” as spoken about in Rumi’s Poem ‘The Guest House’. Laura feels very connected to and at peace in nature; her new works explore ideas relating to plant sentience and reciprocal care. Her work has recently been published in The Walrus and she recently launched a solo virtual exhibition of digital works set in a naturalistic landscape as part of CONTACT photography festival titled The Advantages of Tender Loving Care.'
  );

  let kayaBio = (
    'kaya joan is a multi-disciplinary Afro-Indigenous artist living in T’karonto, Dish with One Spoon treaty territory. kaya’s work is centred in healing practices, transcending linear notions of time, blood memory and relationship to place. Rooting themself in frameworks of Black and Indigenous futuritist pedagogy, kaya engages with methods of making that operate as ancestral tools to unpack and transform buried truths, opening portals 7 generations into the past and future. kaya has also been working as a community arts facilitator for the past 6 years, and are a member of the Milkweed Collective. kaya graduated from OCADU’s Indigenous Visual Art’s program in 2020, and was the recipient of the INVC medal, Nora E. Vaughan Award and Akin Studio’s Career Launcher grant.'
  );

  let nicoleBio = (
    'Nicole Krstin is a Filipinx visual artist whose work imagines the internal mechanisms and processes of transformation, with a focus on the ubiquitous nature of an inspired and evolving societal landscape. Nicole is represented by Wall Space Gallery in Ottawa. Nicole currently works and lives with her family in the traditional Treaty 7 Territory.'
  );

  let yahnBio = (
    "Yahn Nemirovsky (they/them) is an artist, craftsperson, educator, and graduate of OCAD University's Textiles program. They are interested in the intersections of textile and paper media practices, and in their making they take inspiration from the intimate object worlds of perzines and stitching samplers. They combine practices of embroidery, collage, drawing, weaving, quilting, watercolour painting, paper making and appliqué in creating hybrid objects that are given a first person voice with stitched text. In making these objects, Yahn seeks to facilitate an experience wherein it is felt that the viewer and the object both know something deeply true about one another. Yahn's textile work has been exhibited at Xpace Cultural Centre, the Artist Project, and as part of the Bi Arts Festival since its inception in 2017, at Beaver Hall Gallery, Glory Hole Gallery, and D-Beatstro."
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Founding Artists</h2>
      <div className={styles.founders}>
        <ArtistCard
          imgSrc={khadija}
          artist={'Khadija Aziz'}
          bio={khadijaBio}
          siteLink={'https://www.khadijaaziz.com/'}
          igLink={'https://www.instagram.com/_khadija_a_/'}
          emailAddress={'khadija@khadijaaziz.com'}
        />
        <ArtistCard
          imgSrc={laura}
          artist={'Laura Kay Keeling'}
          bio={lauraBio}
          siteLink={'https://www.laurakaykeeling.com/'}
          igLink={'https://www.instagram.com/laurakaykeeling/'}
          emailAddress={'laurakay.keeling@gmail.com'}
        />
      </div>
      <h1 className={styles.title}>Layers of Love x The Robert McLaughlin Gallery</h1>
      <p className={styles.subtitle}>
        For <strong>Layers of Love x RMG</strong>, three more artists were invited to join the project. In partnership with the RMG, layersoflove.ca is now home to a bank of images that were created by Khadija and Laura, as well as three new artist contributors: <strong>kaya joan</strong>, <strong>Nicole Krstin</strong>, and <strong>Yahn Nemirovsky</strong>. The artists were asked to revisit existing artworks to create layers for this community-engaged project. In creating their layers, they reflected on what it means to share their work with other artists and collage-makers like you. You are invited to use the layers of love to explore the art of collage making. A gallery of community-made collages will grow in our <Link to='/gallery' className={styles.link}>Gallery</Link> and on the <a href='https://rmg.on.ca/layers-of-love-x-rmg/' className={styles.link} target='_blank' rel='noreferrer'>RMG’s website</a>.
      </p>
      <h2 className={styles.title}>Featured Artists</h2>
      <div className={styles.featured}>
        <ArtistCard
          imgSrc={kj}
          artist={'kaya joan'}
          bio={kayaBio}
          siteLink={'https://www.kayajoan.com/'}
          igLink={'https://www.instagram.com/kayajoan/'}
          emailAddress={'kay.dacosta97@gmail.com'}
        />
        <ArtistCard
          imgSrc={nicole}
          artist={'Nicole Krstin'}
          bio={nicoleBio}
          siteLink={'https://nicolekrstin.com/'}
          igLink={'https://www.instagram.com/nicolekrstin/'}
          emailAddress={'info@nicolekrstin.com'}
        />
        <ArtistCard
          imgSrc={yahn}
          artist={'Yahn Nemirovsky'}
          bio={yahnBio}
          siteLink={'https://www.yahnemirovsky.com/'}
          igLink={'https://www.instagram.com/yahnemirovsky/'}
          emailAddress={'yahnemirovsky@gmail.com'}
        />
      </div>
      <h1 className={styles.title}>Territorial Acknowledgement</h1>
      <p className={styles.subtitle}>
        We wish to acknowledge that we are physically located in and create artwork in the ancestral and traditional territories of the Anishinaabe, Haudenosaunee and traditional territory of the Wendat. We also want to acknowledge that there were many other Indigenous peoples whose names were not recorded but who travelled through and cared for the land, waterways and creatures in and on this territory.<br/><br/>By acknowledging the traditional territories that we engage with in our daily lives, we wish to reflect on our personal relationships with Indigenous international relations, which include humans, animals, plants, earth, water, and air. As settlers on these lands, we strive to continue learning, taking care of, and giving thanks to the land, water, and other sentient beings. Learn more about your local Indigenous territories at <a href='https://native-land.ca/' className={styles.link} target='_blank' rel='noreferrer'>native-land.ca</a>.
      </p>
    </div>
  )
}
