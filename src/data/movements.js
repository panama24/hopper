const MOVEMENTS = {
  BW: [
    {
      name: 'jumprope',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'single-under', seconds: 1 },
          ],
          INTERMEDIATE: [
            { name: 'double-under', seconds: 1 },
          ],
          ADVANCED: [
            { name: 'double-under', seconds: 1 },
          ],
        },
      ],
    },
    {
      name: 'pullup',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'ring row', seconds: 3 },
            { name: 'jumping pullup', seconds: 3 },
          ],
          INTERMEDIATE: [
            { name: 'kipping pullup', seconds: 4 },
          ],
          ADVANCED: [
            { name: 'kipping pullup', seconds: 4 },
            { name: 'chest-to-bar pullup', seconds: 6 },
            { name: 'strict pullup', seconds: 6 },
            { name: 'bar muscle-up', seconds: 8 },
            { name: 'ring muscle-up', seconds: 10 },
          ],
        },
      ],
    },
    {
      name: 'lunge',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'forward lunge', seconds: 4 },
            { name: 'backward lunge', seconds: 4 },
            { name: 'jump lunge', seconds: 4 },
          ],
          INTERMEDIATE: [
            { name: 'forward lunge', seconds: 3 },
            { name: 'backward lunge', seconds: 3 },
            { name: 'jump lunge', seconds: 3 },
          ],
          ADVANCED: [
            { name: 'backward lunge', seconds: 3 },
            { name: 'forward lunge', seconds: 3 },
            { name: 'front-to-back lunge', seconds: 4 },
            { name: 'jump lunge', seconds: 2 },
          ],
        },
      ],
    },
    {
      name: 'pushup',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'assisted pushup', seconds: 4 },
            { name: 'hand-release assisted pushup', seconds: 5 },
          ],
          INTERMEDIATE: [
            { name: 'pushup', seconds: 2 },
            { name: 'hand-release pushup', seconds: 4 },
            { name: 'plyo pushup', seconds: 3 },
          ],
          ADVANCED: [
            { name: 'pushup', seconds: 2 },
            { name: 'decline pushup', seconds: 3 },
            { name: 'hand-release pushup', seconds: 3 },
            { name: 'hand-stand pushup', seconds: 3 },
            { name: 'plyo pushup', seconds: 3 },
            { name: 'clap pushup', seconds: 3 },
            { name: 'ring pushup', seconds: 3 },
          ],
        },
      ],
    },
    {
      name: 'box jump',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'step-up', seconds: 5 },
          ],
          INTERMEDIATE: [
            { name: 'step-up', seconds: 5 },
            { name: 'box jump', seconds: 5 },
          ],
          ADVANCED: [
            { name: 'step-up', seconds: 5 },
            { name: 'step-over', seconds: 5 },
            { name: 'box jump', seconds: 5 },
            { name: 'box jump over', seconds: 5 },
            { name: 'burpee box jump', seconds: 5 },
          ],
        },
      ],
    },
    {
      name: 'squat',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'air squat', seconds: 3 },
            { name: 'split squat', seconds: 3 },
          ],
          INTERMEDIATE: [
            { name: 'air squat', seconds: 3 },
            { name: 'squat jump', seconds: 3 },
          ],
          ADVANCED: [
            { name: 'air squat', seconds: 2 },
            { name: 'squat jump', seconds: 2 },
          ],
        },
      ],
    },
    {
      name: 'situp',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'anchored situp', seconds: 3 },
            { name: 'abmat situp', seconds: 3 },
            { name: 'crunch', seconds: 3 },
          ],
          INTERMEDIATE: [
            { name: 'anchored situp', seconds: 3 },
            { name: 'abmat situp', seconds: 3 },
            { name: 'v-up', seconds: 3 },
            { name: 'hanging knee raise', seconds: 3 },
          ],
          ADVANCED: [
            { name: 'anchored situp', seconds: 3 },
            { name: 'abmat situp', seconds: 3 },
            { name: 'v-up', seconds: 3 },
            { name: 'knees-to-elbow', seconds: 3 },
            { name: 'toes-to-bar', seconds: 3 },
            { name: 'ghd situp', seconds: 3 },
          ],
        },
      ],
    },
    {
      name: 'burpee',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'squat thrust', seconds: 4 },
          ],
          INTERMEDIATE: [
            { name: 'burpee', seconds: 4 },
            { name: 'burpee to target', seconds: 5 },
            { name: 'burpee pullup', seconds: 8 },
          ],
          ADVANCED: [
            { name: 'burpee', seconds: 3 },
            { name: 'burpee pullup', seconds: 6 },
            { name: 'burpee bar muscle-up', seconds: 8 },
            { name: 'burpee ring muscle-up', seconds: 10 },
          ],
        },
      ],
    },
  ],
  BARBELL: [
    {
      name: 'clean',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'hang power clean', seconds: 5 },
            { name: 'hang clean', seconds: 5 },
          ],
          INTERMEDIATE: [
            { name: 'hang power clean', seconds: 5 },
            { name: 'power clean', seconds: 5 },
            { name: 'hang clean', seconds: 5 },
            { name: 'clean', seconds: 5 },
          ],
          ADVANCED: [
            { name: 'hang power clean', seconds: 5 },
            { name: 'power clean', seconds: 5 },
            { name: 'hang clean', seconds: 5 },
            { name: 'clean', seconds: 5 },
          ],
        },
      ],
    },
    {
      name: 'snatch',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'hang power snatch', seconds: 6 },
            { name: 'hang snatch', seconds: 8 },
          ],
          INTERMEDIATE: [
            { name: 'hang power snatch', seconds: 5 },
            { name: 'power snatch', seconds: 5 },
            { name: 'hang snatch', seconds: 6 },
            { name: 'snatch', seconds: 7 },
          ],
          ADVANCED: [
            { name: 'hang power snatch', seconds: 3 },
            { name: 'power snatch', seconds: 4 },
            { name: 'hang snatch', seconds: 5 },
            { name: 'snatch', seconds: 6 },
          ],
        },
      ],
    },
    {
      name: 'press',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'press', seconds: 5 },
            { name: 'push press', seconds: 4 },
            { name: 'jerk', seconds: 4 },
          ],
          INTERMEDIATE: [
            { name: 'press', seconds: 5 },
            { name: 'push press', seconds: 4 },
            { name: 'jerk', seconds: 4 },
          ],
          ADVANCED: [
            { name: 'press', seconds: 3 },
            { name: 'push press', seconds: 3 },
            { name: 'jerk', seconds: 3 },
          ],
        },
      ],
    },
    {
      name: 'squat',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'back squat', seconds: 5 },
            { name: 'front squat', seconds: 5 },
            { name: 'thruster', seconds: 8 },
          ],
          INTERMEDIATE: [
            { name: 'back squat', seconds: 4 },
            { name: 'front squat', seconds: 4 },
            { name: 'overhead squat', seconds: 4 },
            { name: 'thruster', seconds: 5 },
          ],
          ADVANCED: [
            { name: 'back squat', seconds: 3 },
            { name: 'front squat', seconds: 3 },
            { name: 'overhead squat', seconds: 3 },
            { name: 'thruster', seconds: 5 },
          ],
        },
      ],
    },
  ],
  DUMBBELL: [
    {
      name: 'press',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'press', seconds: 5 },
            { name: 'push press', seconds: 4 },
            { name: 'jerk', seconds: 4 },
          ],
          INTERMEDIATE: [
            { name: 'press', seconds: 5 },
            { name: 'push press', seconds: 4 },
            { name: 'jerk', seconds: 4 },
          ],
          ADVANCED: [
            { name: 'press', seconds: 3 },
            { name: 'push press', seconds: 3 },
            { name: 'jerk', seconds: 3 },
          ],
        },
      ],
    },
    {
      name: 'squat',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'goblet squat', seconds: 5 },
            { name: 'front squat', seconds: 5 },
            { name: 'thruster', seconds: 5 },
          ],
          INTERMEDIATE: [
            { name: 'goblet squat', seconds: 4 },
            { name: 'front squat', seconds: 4 },
            { name: 'thruster', seconds: 4 },
          ],
          ADVANCED: [
            { name: 'goblet squat', seconds: 3 },
            { name: 'front squat', seconds: 3 },
            { name: 'overhead squat', seconds: 3 },
            { name: 'thruster', seconds: 3 },
          ],
        },
      ],
    },
  ],
  KETTLEBELL: [
    {
      name: 'press',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'press', seconds: 5 },
            { name: 'push press', seconds: 4 },
            { name: 'jerk', seconds: 4 },
          ],
          INTERMEDIATE: [
            { name: 'press', seconds: 5 },
            { name: 'push press', seconds: 4 },
            { name: 'jerk', seconds: 4 },
          ],
          ADVANCED: [
            { name: 'press', seconds: 3 },
            { name: 'push press', seconds: 3 },
            { name: 'jerk', seconds: 3 },
          ],
        },
      ],
    },
    {
      name: 'squat',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'goblet squat', seconds: 5 },
          ],
          INTERMEDIATE: [
            { name: 'goblet squat', seconds: 4 },
            { name: 'front squat', seconds: 4 },
            { name: 'thruster', seconds: 5 },
          ],
          ADVANCED: [
            { name: 'goblet squat', seconds: 3 },
            { name: 'front squat', seconds: 3 },
            { name: 'overhead squat', seconds: 3 },
            { name: 'thruster', seconds: 3 },
          ],
        },
      ],
    },
    {
      name: 'swing',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'russian swing', seconds: 3 },
          ],
          INTERMEDIATE: [
            { name: 'russian swing', seconds: 3 },
            { name: 'american swing', seconds: 4 },
          ],
          ADVANCED: [
            { name: 'russian swing', seconds: 2 },
            { name: 'american swing', seconds: 3 },
            { name: 'single-arm snatch', seconds: 5 },
            { name: 'dual kb snatch', seconds: 8 },
          ],
        },
      ],
    },
    {
      name: 'clean',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'single-arm clean', seconds: 3 },
          ],
          INTERMEDIATE: [
            { name: 'single-arm clean', seconds: 3 },
            { name: 'single-arm clean & jerk', seconds: 5 },
            { name: 'dual kb clean', seconds: 8 },
            { name: 'dual kb clean & jerk', seconds: 10 },
          ],
          ADVANCED: [
            { name: 'single-arm clean', seconds: 3 },
            { name: 'single-arm clean & jerk', seconds: 5 },
            { name: 'dual kb clean', seconds: 6 },
            { name: 'dual kb clean & jerk', seconds: 8 },
          ],
        },
      ],
    },
  ],
  PLYOMETRIC: [
    {
      name: 'wallball',
      variantsByLevel: [
        {
          BEGINNER: [
            { name: 'wallball', seconds: 5 },
          ],
          INTERMEDIATE: [
            { name: 'wallball', seconds: 3 },
          ],
          ADVANCED: [
            { name: 'wallball', seconds: 3 },
            { name: 'double squat wallball', seconds: 5 },
          ],
        },
      ],
    },
  ],
}

export default MOVEMENTS;