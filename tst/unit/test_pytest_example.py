
import pytest
from pytest_example_src import my_function

@pytest.fixture
def input_argument():
    # Setup logic
    yield (2, 3) # Yield to pass input argument data, but eventually resume control flow..
    # Teardown logic

def test_addition(input_argument): # Prefix with "test_" to be recognized by the package
    
    assert my_function(*input_argument) == 5 # Test through assertion

