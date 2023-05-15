'use client';

import { useState } from 'react';
import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Contact.module.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const handleClick = () => {
    setName('');
    setEmail('');
    setText('');
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex-center ${styles['contact-container']}`}
    >
      <div className="my-10 w-full">
        <SectionHeader text="Get in Touch" subText="contact" />

        <div className="main mt-10 md:mt-20">
          <h2 className="text-2xl font-semibold text-white text-center">
            HIT ME UP!
          </h2>

          <form
            action="https://getform.io/f/cc5a9ed0-184c-4ea9-9e72-e7bc80862533"
            method="POST"
            className={styles['contact-form']}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full md:w-3/4 mt-5"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full md:w-3/4 my-10"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="What do you want to tell?"
              className="w-full md:w-3/4 mb-5"
              rows={5}
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />

            <Button
              text="Send Message"
              fill
              primary
              type="submit"
              onClick={handleClick}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
