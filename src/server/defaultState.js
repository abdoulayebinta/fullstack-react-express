export const defaultState = {
  users: [
    {
      id: "U1",
      name: "Dev"
    },
    {
      id: "U2",
      name: "Abdoulaye"
    },
    {
      id: "U3",
      name: "Rama"
    }
  ],
  groups: [
    {
      name: "To Do",
      id: "G1",
      owner: "U1"
    },
    {
      name: "Doing",
      id: "G2",
      owner: "U1"
    },
    {
      name: "Done",
      id: "G3",
      owner: "U1"
    }
  ],
  tasks: [
    {
      name: "Refactor tests",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false
    },
    {
      name: "Meet with CTO",
      id: "T2",
      group: "G1",
      owner: "U1",
      isComplete: true
    },
    {
      name: "Detoxicate myself",
      id: "T3",
      group: "G2",
      owner: "U2",
      isComplete: false
    },
    {
      name: "Update component snapshots",
      id: "T4",
      group: "G2",
      owner: "U1",
      isComplete: false
    },
    {
      name: "Production optimization",
      id: "T4",
      group: "G3",
      owner: "U1",
      isComplete: true
    }
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "Great work!!!"
    },
    {
      owner: "U2",
      id: "C2",
      task: "T2",
      content: "Productif meeting!!!"
    },
    {
      owner: "U3",
      id: "C3",
      task: "T3",
      content: "Detox mind and budy!!!"
    },
    {
      owner: "U4",
      id: "C4",
      task: "T4",
      content: "Great work!!!"
    }
  ]
};
