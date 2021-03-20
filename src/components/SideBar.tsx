import { Button } from "./Button";

export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}
interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  onSelectGenre(genreId: number): void;
}

export function SideBar({
  genres,
  selectedGenreId,
  onSelectGenre,
}: SideBarProps): JSX.Element {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
