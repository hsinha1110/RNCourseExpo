export type Goal = {
  id: string;
  text: string;
};

export type ItemGoalProps = {
  item: Goal;
  onDeleteItem: (id: string) => void;
};

export type GoalInputProps = {
  visible: boolean;
  onAddGoal: (text: string) => void;
  onCancel: () => void;
};
