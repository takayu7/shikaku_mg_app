  export const getRewardRankColor = (rank: string) => {
    switch (rank) {
      case "S":
        return "bg-purple-100 text-purple-700 border-purple-300";
      case "A":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "B":
        return "bg-green-100 text-green-700 border-green-300";
      case "C":
        return "bg-gray-100 text-gray-700 border-gray-300";
      case "D":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };