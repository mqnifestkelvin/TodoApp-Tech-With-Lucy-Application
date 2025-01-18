from rest_framework import generics
from .models import Todo
from .serializers import TodoSerializer

class TodoListCreateView(generics.ListCreateAPIView):
    """
    get:
    Return a list of all existing todos.

    post:
    Create a new todo item. Provide 'title', 'description', and 'completed'.
    """
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class TodoDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    get:
    Retrieve a specific todo by ID.

    put:
    Update an existing todo. Provide 'title', 'description', and 'completed'.

    delete:
    Delete a todo by ID.
    """
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
