require 'set'

def sudoku_solve(board)
  # Plan
  #build hash of boards
  #build jhash of columns
  #build hash of rows

  # s = Set.new
  # s << num
  th_by_th_hash = {
    #1..9 =>  s
   }
  row_hash = {
    #1..9 =>  s
   }
  col_hash = {
   # 1..9 =>  s
   }

  boardid = 0
  th_by_th_hash = Hash.new { |h, k| h[k] = Set.new }
  col_hash = Hash.new { |h, k| h[k] = Set.new }
  row_hash = Hash.new { |h, k| h[k] = Set.new }

  # {|h,k| h[k] = Set.new}
  # 0,0 -> 2,2 | 0,3 -> 2,5 | 0,6 -> 2,8
  # ------------------------------------
  # 3,0 -> 5,2 |

  (0..board.size-1).each do |i|
    row = board[i]
    #puts "Row: #{i}"
    v_offset = (i/3)
    # puts "v_offset: #{v_offset}"
    (0..row.size-1).each do |j|
        h_offset = ((j/3)+1)

     # populate back numbers
     # new_boardid = ((i/3)+1) * (j/3)+1
     new_boardid = 3*v_offset + h_offset

     new_boardid -= 1

     unless board[i][j] == 0
        if th_by_th_hash[new_boardid].include?(board[i][j]) || row_hash[i].include?(board[i][j]) ||
            col_hash[j].include?(board[i][j])
            return false
        end
        th_by_th_hash[new_boardid] << board[i][j]
        row_hash[i] << board[i][j]
        col_hash[j] << board[i][j]
     end
    end
  end


  return num_finder(board, th_by_th_hash, col_hash, row_hash)

end

def num_finder(board, th_by_th_hash, col_hash, row_hash)

    (0..board.size-1).each do |i|
        v_offset = (i/3)*1
        row = board[i]
        (0..row.size-1).each do |j|
            h_offset = ((j/3)+1)
            boardid = 3*v_offset + h_offset
            boardid -= 1

            if board[i][j] != 0 && i == board.size-1 && j == row.size-1
             # its a number that was prefilled
             return true
            end

            if board[i][j] == 0
                # if we have a blank, attempt to populate it with 1-9
                (1..9).each do |num|
                    if !th_by_th_hash[boardid].include?(num) && !row_hash[i].include?(num) && !col_hash[j].include?(num)
                        # found a valid
                        if i == board.size-1 && j == row.size-1
                            return true
                        end
                        found = num

                        th_by_th_hash[boardid] << found
                        row_hash[i] << found
                        col_hash[j] << found
                        board[i][j] = found
                        succ = num_finder(board, th_by_th_hash, col_hash, row_hash)
                        if !succ
                            th_by_th_hash[boardid].delete(found)
                            row_hash[i].delete(found)
                            col_hash[j].delete(found)
                            board[i][j] = 0
                        else
                            return true
                        end
                    end
                end  # loop
            end #if
        end
    end
    return false
end

board = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0]
  ]

puts sudoku_solve(board)
