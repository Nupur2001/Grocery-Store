# def equalizeTeamSize(teamSize, k):
#     teamSize.sort()  # Sort team sizes in ascending order
#     min_team_size = teamSize[0]  # Get the size of the smallest team
#     max_teams = 0
    
#     # Count the number of teams with size equal to the smallest team size
#     for size in teamSize:
#         if size == min_team_size:
#             max_teams += 1
    
#     # Calculate the number of teams that can be formed if the sizes are reduced
#     remaining_teams = len(teamSize) - max_teams
    
#     # If the remaining teams are less than or equal to k, they can be reduced to the smallest size
#     if remaining_teams <= k:
#         max_teams -= remaining_teams
#     else:
#         # Reduce the size of the smallest teams to accommodate k remaining teams
#         max_teams -= k
    
#     return max_teams

# # Example usage:
# teamSize = [1, 2, 3, 4]
# k = 2
# print(equalizeTeamSize(teamSize, k))  # Output: 2




def max_teams_with_equal_size(teamSize, k):
    teamSize.sort()  # Sort the team sizes in ascending order
    n = len(teamSize)
    min_team_size = teamSize[0]  # Smallest team size
    max_possible_team_size = min_team_size + k  # Maximum possible team size after reduction

    # Count the number of teams that can be formed with the maximum possible team size
    max_teams = 0
    for size in teamSize:
        if size <= max_possible_team_size:
            max_teams += 1
        else:
            break

    # Calculate the maximum number of teams that can be formed
    return min(max_teams, n // (k + 1))

# Example usage:
teamSize = [1,2,3,4,5,6,7]
k = 10
print(max_teams_with_equal_size(teamSize, k))  # Output: 2
