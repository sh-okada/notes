from dataclasses import dataclass


@dataclass(eq=True, frozen=True)
class PostedUser:
    id: str
    name: str

    @classmethod
    def create(cls, id: str, name: str) -> "PostedUser":
        return PostedUser(id=id, name=name)
