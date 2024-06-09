import { title } from 'process';
import React from 'react';
import { IconType } from 'react-icons';

interface TemplateProps {
  titleContent: string;
  aboutContent: React.ReactNode;
  contributionContent: React.ReactNode;
  galleryContent: React.ReactNode;
  linksContent: React.ReactNode;
  languages?: IconType[]; // Array of React icons representing programming languages
}

const Template: React.FC<TemplateProps> = ({ titleContent, aboutContent, contributionContent, galleryContent, linksContent, languages }) => {
  return (
    <div className="row d-flex align-items-center justify-content-center pt-5">
      <div className="col-12 col-md-4 pt-5">
        <div className="template p-5 bg-dark text-light rounded">
          <header style={{ textAlign: 'center' }}>
          <h1> {titleContent}</h1>
          </header>
          <main>
            <section id="about" className="mt-2">
              <h2 >About</h2>
              <div>{aboutContent}</div>
            </section>
            <section id="contribution" className="mt-5">
              <h2>Contribution</h2>
              <div>{contributionContent}</div>
            </section>
            {languages && languages.length > 0 && (
              <section id="Technologies" className="mt-5">
                <h2>Technologies</h2>
                <div>
                  {languages.map((Icon, index) => (
                    <Icon key={index} size="5em" className="mr-3 p-2 icon-style" />
                  ))}
                </div>
              </section>
            )}
            <section id="gallery" className="mt-5">
              <h2>Gallery</h2>
              <div style={{ height: '400px', overflowY: 'auto' }}>{galleryContent}</div>
            </section>
            <section id="links" className="mt-5">
              <h2>Links</h2>
              <div>{linksContent}</div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Template;
