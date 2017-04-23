//59 in the box
interface FightingCard {
  title: string;
  fightingValue: number;
  specialAbilityText?: string;
  specialAbility?: (player) => {};
  lifePoints: number;
  enum Age {
    Old
    ReallyOld
  };
  aging: Age;
}
