let rec explode ch = 
  match ch with
  | "" -> []
  | ch -> ((int_of_char (ch.[0])) - 48) :: (explode (String.sub ch 1 ( (String.length ch)-1) ) );;

let rec find m predicate l =
  match l with
  | [] -> m
  | h::t ->
    if (predicate h m) then
      find h predicate t
    else
      find m predicate t;;
