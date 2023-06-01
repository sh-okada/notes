from fastapi import HTTPException, status


def bad_request() -> HTTPException:
    return HTTPException(status_code=status.HTTP_400_BAD_REQUEST)


def unauthorized() -> HTTPException:
    return HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)


def forbidden() -> HTTPException:
    return HTTPException(status_code=status.HTTP_403_FORBIDDEN)


def not_found() -> HTTPException:
    return HTTPException(status_code=status.HTTP_404_NOT_FOUND)
