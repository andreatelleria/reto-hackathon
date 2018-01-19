var peliculas = {
  'adventure': [ 
    {title: 'Finding Nemo',
      genre: 'adventure',
      director: 'Andrew Stanton, Lee Unkrich(co-director)',
      writer: 'Andrew Stanton (original story by), Andrew Stanton (screenplay by), Bob Peterson (screenplay by), David Reynolds (screenplay by)',
      actors: 'Albert Brooks, Ellen DeGeneres, Alexander Gould, Willem Dafoe'
    },
    {title: 'The Incredibles',
      genre: 'adventure',
      director: 'Brad Bird',
      writer: 'Brad Bird',
      actors: 'Craig T. Nelson, Holly Hunter, Samuel L. Jackson, Jason Lee'
    },
    {title: 'Up',
      genre: 'adventure',
      director: 'Pete Docter, Bob Peterson(co-director)',
      writer: 'Pete Docter (story by), Bob Peterson (story by), Tom McCarthy (story by), Bob Peterson (screenplay by), Pete Docter (screenplay by)',
      actors: 'Edward Asner, Christopher Plummer, Jordan Nagai, Bob Peterson'
    },
    {title: 'Frozen',
      genre: 'adventure',
      director: 'Chris Buck, Jennifer Lee',
      writer: 'Jennifer Lee (screenplay by), Hans Christian Andersen (story inspired by \"The Snow Queen\" by), Chris Buck (story by), Jennifer Lee (story by), Shane Morris (story by)',
      actors: 'Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad'
    },
    {title: 'Wreck-It Ralph',
      genre: 'adventure',
      director: 'Rich Moore',
      writer: 'Rich Moore (story by), Phil Johnston (story by), Jim Reardon (story by), Phil Johnston (screenplay by), Jennifer Lee (screenplay by), John C. Reilly (additional story material by), Sam Levine (additional story material by), Jared Stern (additional story material by)',
      actors: 'John C. Reilly, Sarah Silverman, Jack McBrayer, Jane Lynch'
    },
  ],
  'science': [
    {title: 'WALL·E',
      genre: 'science-fiction',
      director: 'Andrew Stanton',
      writer: 'Andrew Stanton (original story by), Pete Docter (original story by), Andrew Stanton (screenplay by), Jim Reardon (screenplay by)',
      actors: 'Ben Burtt, Elissa Knight, Jeff Garlin, Fred Willard'
    },
    {title: 'Monsters vs. Aliens',
      genre: 'science-fiction',
      director: 'Rob Letterman, Conrad Vernon',
      writer: 'Maya Forbes (screenplay), Wallace Wolodarsky (screenplay)',
      actors: 'Reese Witherspoon, Rainn Wilson, Stephen Colbert'
    },
    {title: 'Cloudy with a Chance of Meatballs',
      genre: 'science-fiction',
      director: 'Phil Lord, Christopher Miller',
      writer: 'Phil Lord (written for the screen by), Christopher Miller (written for the screen by)',
      actors: 'Anna Faris, Bill Hader, Bruce Campbell'
    },
    {title: 'Home',
      genre: 'science-fiction',
      director: 'Tim Johnson',
      writer: 'Tom J. Astle (screenplay by), Matt Ember (screenplay by)',
      actors: 'Jim Parsons, Rihanna, Steve Martin'
    },
    {title: 'Turbo',
      genre: 'science-fiction',
      director: 'David Soren',
      writer: 'Darren Lemke (screenplay), Robert D. Siegel (screenplay)',
      actors: 'Ryan Reynolds, Paul Giamatti, Maya Rudolph'
    },
  ],
  'comedy': [
    {title: 'The Boss Baby',
      genre: 'comedy',
      director: 'Tom McGrath',
      writer: 'Michael McCullers, Marla Frazee (based on the book by)',
      actors: 'Alec Baldwin, Steve Buscemi, Jimmy Kimmel, Lisa Kudrow'
    },
    {title: 'Toy Story',
      genre: 'comedy',
      director: 'John Lasseter',
      writer: 'John Lasseter (original story by), Pete Docter (original story by)',
      actors: 'Tom Hanks, Tim Allen, Don Rickles'
    },
    {title: 'Monsters, Inc.',
      genre: 'comedy',
      director: 'Pete Docter, David Silverman (co-director)',
      writer: 'Pete Docter (original story by), Jill Culton (original story by)',
      actors: 'Billy Crystal, John Goodman, Mary Gibbs'
    },
    {title: 'Shrek',
      genre: 'comedy',
      director: 'Andrew Adamson, Vicky Jenson',
      writer: 'William Steig (book), Ted Elliott',
      actors: 'Mike Myers, Eddie Murphy, Cameron Diaz'
    },
    {title: 'Ice Age',
      genre: 'comedy',
      director: 'Chris Wedge, Carlos Saldanha (co-director)',
      writer: 'Michael J. Wilson (story), Michael Berg (screenplay)',
      actors: 'Denis Leary, John Leguizamo, Ray Romano'
    },
  ],
  'fantasy': [
    {title: 'Coco',
      genre: 'fantasy',
      director: 'Lee Unkrich, Adrian Molina (co-director)',
      writer: 'Lee Unkrich (original story by), Jason Katz (original story by',
      actors: 'Anthony Gonzalez, Gael García Bernal, Benjamin Bratt'
    },
    {title: 'Ferdinand',
      genre: 'fantasy',
      director: 'Carlos Saldanha',
      writer: 'Munro Leaf (based on the book by), Robert Lawson (based on the book by)',
      actors: 'John Cena, Kate McKinnon, Bobby Cannavale'
    },
    {title: 'Zootopia',
      genre: 'fantasy',
      director: 'Byron Howard, Rich Moore',
      writer: 'Byron Howard (story by), Rich Moore (story by)',
      actors: 'Ginnifer Goodwin, Jason Bateman, Idris Elba'
    },
    {title: 'Ratatouille',
      genre: 'fantasy',
      director: 'Brad Bird, Jan Pinkava (co-director)',
      writer: 'Brad Bird (screenwriter), Jan Pinkava (original story by)',
      actors: 'Brad Garrett, Lou Romano, Patton Oswalt'
    },
    {title: 'A Bugs Life',
      genre: 'fantasy',
      director: 'John Lasseter, Andrew Stanton (co-director)',
      writer: 'John Lasseter (original story by), Andrew Stanton (original story by)',
      actors: 'Kevin Spacey, Dave Foley, Julia Louis-Dreyfus'
    },
  ],
  'musical': [
    {title: 'The Lion King',
      genre: 'musical',
      director: 'Roger Allers, Rob Minkoff',
      writer: 'Irene Mecchi (screenplay by), Jonathan Roberts (screenplay by)',
      actors: 'Matthew Broderick, Jeremy Irons, James Earl Jones '
    },
    {title: 'Madagascar',
      genre: 'musical',
      director: 'Eric Darnell, Tom McGrath',
      writer: 'Mark Burton, Billy Frolick',
      actors: 'Chris Rock, Ben Stiller, David Schwimmer'
    },
    {title: 'Tangled',
      genre: 'musical',
      director: 'Nathan Greno, Byron Howard',
      writer: 'Dan Fogelman (screenplay by), Jacob Grimm (based upon the fairy tale "Rapunzel" by) (as the Brothers Grimm)',
      actors: 'Mandy Moore, Zachary Levi, Donna Murphy'
    },
    {title: 'Moana',
      genre: 'musical',
      director: 'Ron Clements, John Musker',
      writer: 'Jared Bush (screenplay by), Ron Clements (story by)',
      actors: 'Aulii Cravalho, Dwayne Johnson, Rachel House'
    },
    {title: 'Barbie as the Princess and the Pauper',
      genre: 'musical',
      director: 'William Lau',
      writer: 'Cliff Ruby, Elana Lesser',
      actors: 'Kelly Sheridan, Melissa Lyons, Julie Stevens'
    },
  ]

};
