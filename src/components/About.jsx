import React from 'react';

function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img
          src="/path-to-profile-image.jpg"
          alt="Michael Cameron"
          className="w-full rounded-lg"
        />
        <div className="space-y-6 font-serif text-gray-800">
          <p>
            Michael Cameron's manipulated photographs, paintings, collages, and appropriated images link
            personal experiences of tragedy, loss, and queer nostalgia with fractured childhood memories.
          </p>
          <p>
            In 2015, Michael sustained a Traumatic Brain Injury — his creative process dramatically altered
            due to ensuing aphasia and paralysis. In his work, he reveals the impact of his extreme mental
            experiences.
          </p>
          <p>
            Michael Cameron's work is in the Robert Summers Permanent Collection of Queer Art at Cerritos
            College Art Gallery in California. He currently lives and works in Indiana.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;